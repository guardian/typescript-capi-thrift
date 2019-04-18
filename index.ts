console.log("HELLO")
import { generate } from '@creditkarma/thrift-typescript'

console.log(process.cwd())
// Generates TypeScript and saves to given outDir
generate({
    rootDir: process.cwd(),
    sourceDir: 'thrift',
    outDir: 'codegen',
    target: 'thrift-server',
    files: [
        'v1.thrift',
        'story_model.thrift',
        'contentatom.thrift',
        'atoms/audio.thrift','atoms/cta.thrift','atoms/interactive.thrift','atoms/qanda.thrift','atoms/review.thrift',
        'atoms/chart.thrift','atoms/explainer.thrift','atoms/media.thrift','atoms/quiz.thrift','atoms/storyquestions.thrift',
        'atoms/commonsdivision.thrift','atoms/guide.thrift','atoms/profile.thrift','atoms/recipe.thrift','atoms/timeline.thrift',
        'atoms/shared.thrift','entity.thrift','entities/film.thrift','entities/organisation.thrift','entities/place.thrift','entities/shared.thrift','entities/game.thrift','entities/person.thrift','entities/restaurant.thrift',
        'story_package_article.thrift',
    ],
    fallbackNamespace: 'java',
})
