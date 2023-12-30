export async function telegramSendMessage(text: string) {
    const chatIds = import.meta.env.VITE_TELEGRAM_CHAT_IDS.split(',');
    chatIds.forEach((chat_id: string) => {
        const body = {
            chat_id: chat_id,
            text: text
        }
        $fetch('/api/message', {
            method: 'POST',
            body: JSON.stringify(body),
        });
    })
}
