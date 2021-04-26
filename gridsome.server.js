// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      {
        strapi {
          notes {
            slug
          }
          works {
            slug
          }
        }
      }
    `)

    const notes = data.strapi.notes
    const works = data.strapi.works

    // Create single note page
    notes.forEach((note) => {
      createPage({
        path: `/notes/${note.slug}`,
        component: "./src/templates/Note.vue",
        context: {
          slug: note.slug,
        },
      })
    } )
    // Create single work page
    works.forEach((work) => {
      createPage({
        path: `/works/${work.slug}`,
        component: "./src/templates/Work.vue",
        context: {
          slug: work.slug,
        },
      })
    })
  })
}
