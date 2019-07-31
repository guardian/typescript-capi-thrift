import { generate } from "@creditkarma/thrift-typescript";
import { execSync } from "child_process";

const replace = require("replace-in-file");
interface JAR {
  name: string;
  version: string;
}

const url = ({ name, version }: JAR) =>
  `https://search.maven.org/remotecontent?filepath=com/gu/${name}/${version}/${name}-${version}.jar`;

const jars: JAR[] = [
  { name: "content-api-models", version: "14.2" },
  { name: "content-atom-model-thrift", version: "3.0.3" },
  { name: "story-model-thrift", version: "2.0.1" },
  { name: "story-packages-model-thrift", version: "2.0.1" },
  { name: "content-entity-thrift", version: "2.0.1" }
];

execSync(`rm -rf thrift && mkdir thrift`);
jars.map(jar => {
  execSync(
    `cd thrift && curl ${url(jar)} > ${jar.name}.jar && jar xf ${jar.name}.jar`
  );
});

const files = [
  "content/v1.thrift",
  "story_model.thrift",
  "contentatom.thrift",
  "atoms/audio.thrift",
  "atoms/cta.thrift",
  "atoms/interactive.thrift",
  "atoms/qanda.thrift",
  "atoms/review.thrift",
  "atoms/chart.thrift",
  "atoms/explainer.thrift",
  "atoms/media.thrift",
  "atoms/quiz.thrift",
  "atoms/storyquestions.thrift",
  "atoms/commonsdivision.thrift",
  "atoms/guide.thrift",
  "atoms/profile.thrift",
  "atoms/recipe.thrift",
  "atoms/timeline.thrift",
  "atoms/shared.thrift",
  "entity.thrift",
  "shared.thrift",
  "entities/film.thrift",
  "entities/organisation.thrift",
  "entities/place.thrift",
  "entities/game.thrift",
  "entities/person.thrift",
  "entities/restaurant.thrift",
  "story_package_article.thrift"
];

//Replaces erroneous namespaces
replace.sync({
  files: files.map(name => `thrift/${name}`),
  from: /namespace \*/,
  to: "namespace js"
});

//Generates TypeScript and saves to given outDir
generate({
  rootDir: process.cwd(),
  sourceDir: "thrift",
  outDir: "capi-ts/src",
  target: "thrift-server",
  files,
  fallbackNamespace: "java"
})
  .catch(e => {
    console.log("error generating typescript");
    console.error(e);
  })
  .then(() => {
    console.log("Generated source code, exiting.");
  });
