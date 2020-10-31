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
        }
      }
    `)

    const notes = data.strapi.notes

    notes.forEach((note) => {
      createPage({
        path: `/notes/${note.slug}`,
        component: "./src/templates/Note.vue",
        context: {
          slug: note.slug,
        },
      })
    })
  })
}
