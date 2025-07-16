import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQueryWithAuth = async (args, api, extraOptions) => {
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: "https://p10-argentbank-backend.onrender.com/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });
  console.log("→ base query called with:", args);
  try {
    const result = await rawBaseQuery(args, api, extraOptions);

    if (result.error) {
      const { status } = result.error;

      if (status === 400 && result.error.data?.message) {
        const msg = result.error.data.message;

        if (msg.includes("User")) {
          return {
            error: {
              code: "invalid_email",
              message: "Votre email n'est pas reconnu",
            },
          };
        } else {
          return {
            error: {
              code: "invalid_password",
              message: "Votre mot de passe est erroné",
            },
          };
        }
      }

      if (status >= 500 || status === "FETCH_ERROR") {
        return {
          error: {
            code: "server_error",
            message: "Le serveur ne répond pas",
          },
        };
      }

      return {
        error: {
          code: "unknown_error",
          message: "Une erreur inconnue est survenue",
        },
      };
    }

    return result;
  } catch (err) {
    return {
      error: {
        code: "server_error",
        message: "Le serveur est injoignable",
      },
    };
  }
};
