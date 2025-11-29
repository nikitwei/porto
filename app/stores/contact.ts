export const useContactStore = defineStore("contact", {
    state: () => ({
        email: "yourname@email.com",
        whatsapp: "+628123456789",
        github: "https://github.com/yourusername"
    })
});
