import Vapi from "@vapi-ai-web"

export const vapi = new Vapi(import.meta.env.VITE_VAPI_API_KEY)
const assistantId = import.meta.env.VITE_VAPI_ASSISTANT_ID

// To start the assistant
export const startAssistant = async (firstName, lastName, email, phone) => {
    const assistantOverrides = {
        variableValues: {
            firstName,
            lastName,
            email,
            phone,
        }
    }



    return await vapi.start(assistantId)
}

// Stop the assistant
export const stopAssistant = async () => {
    vapi.stop()
}
