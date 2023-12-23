import {useBase, createRouter, defineEventHandler, readBody, H3Event} from "h3";

const router = createRouter();

router.post('/message', defineEventHandler({
    async handler(event: H3Event) {
        try {
            const body = await readBody(event);
            const token = '6893497355:AAFiVWEyVT8wfLfHABYziFkDUPWFz73ikbw';
            const url = `https://api.telegram.org/bot${token}/sendMessage`;
            const result = await $fetch(url, {
                method: 'POST',
                body,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json; charset=UTF-8',
                }
            });
            console.log(body);
            console.log(url);
            console.log(result);
            if (result) {
                return {
                    status: 200,
                    statusMessage: 'Message sent successfully',
                }
            }
        } catch {
            throw createError({
                statusCode: 500,
                statusMessage: 'Something went wrong'
            })
        }
    }

}));

export default useBase('/api', router.handler);