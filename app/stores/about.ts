export const useAboutStore = defineStore("about", {
    state: () => {
        const startYear = 2018;
        const currentYear = new Date().getFullYear();
        const years = currentYear - startYear; // dynamic

        return {
            title: "ABOUT ME",
            desc : `I am a Software Engineer based in Bogor, Indonesia, with over ${years} years of professional experience building high-quality mobile and web applications. I specialize in Flutter, Hybrid App migration, GraphQL, and modern web frameworks such as Nuxt, Yii2, Blazor, and .NET Core.\n` +
                "\n" +
                "I’ve worked on real, large-scale products — from rebuilding the Starbucks Mobile App to designing AI-powered features, automation testing systems, and enterprise dashboards. I enjoy solving complex problems, creating clean UI/UX, and shipping stable production code.\n" +
                "\n" +
                "Right now, I’m actively looking for a new opportunity where I can contribute quickly and help teams accelerate their product delivery."
        }
    }
});
