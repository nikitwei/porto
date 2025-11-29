export const useSkillsStore = defineStore("skills", {
    state: () => ({
        items: [
            {title: "Flutter", slug: "flutter"},
            {title: "PHP", slug: "php"},
            {title: ".NET", slug: "dotnet"},
            {title: "Blazor", slug: "blazor"},
            {title: "GraphQL", slug: "graphql"},
            {title: "Vue.js", slug: "vuedotjs"},
            {title: "Nuxt.js", slug: "nuxt"},
            {title: "Docker", slug: "docker"},
            {title: "MySQL", slug: "mysql"},
            {title: "Github", slug: "github"},
            {title: "Gitlab", slug: "gitlab"},
        ]
    })
});
