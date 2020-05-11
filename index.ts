import { generate } from "@creditkarma/thrift-typescript";
import { exec as execCallback } from "child_process";
import {replaceInFile as replace} from "replace-in-file";
import { promisify } from "util";
const exec = promisify(execCallback);
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

const run = async () => {
  console.log("Creating thrift directory");
  await exec(`rm -rf thrift && mkdir thrift`);

  const execOpts = { cwd: "./thrift" };
  await Promise.all(
    jars.map(async jar => {
      console.log(`Fetching ${jar.name}`);
      await exec(`curl -L ${url(jar)} > ${jar.name}.jar`, execOpts);
      console.log(`Extracting ${jar.name}`);
      await exec(`jar xf ${jar.name}.jar`, execOpts);
    })
  );

  //Replaces erroneous namespaces
  console.log("Performing alterations.");
  await replace({
    files: files.map(name => `thrift/${name}`),
    from: /namespace \*/,
    to: "namespace js"
  });

  console.log("Generating typescript.");
  //Generates TypeScript and saves to given outDir
  await generate({
    rootDir: process.cwd(),
    sourceDir: "thrift",
    outDir: "capi-ts/src",
    target: "thrift-server",
    files,
    fallbackNamespace: "java"
  });

  console.log("Generated source code, exiting.");
};
run().catch(error => {
  console.error(error);
  process.exit(1);
});
