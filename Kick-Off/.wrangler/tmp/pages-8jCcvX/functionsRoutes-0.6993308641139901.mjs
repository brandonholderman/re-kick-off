import { onRequestGet as __api_chat_js_onRequestGet } from "C:\\Users\\FifthFlow\\Projects\\re-kick-off\\Kick-Off\\functions\\api\\chat.js"

export const routes = [
    {
      routePath: "/api/chat",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_chat_js_onRequestGet],
    },
  ]