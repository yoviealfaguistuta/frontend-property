import toast from "react-hot-toast";
// import { eraseCookie, getCookie } from "./cookie";

export const catchDefaultError = (error: any) => {
    if (error.response == null) {
        if (error.code === 'ERR_NETWORK' || error.code === 'ECONNABORTED') {
            toast.error(`Gagal memproses permintaan, Timeout | Network Error - Can't contact The Service`);
            return
        }
    }

    // if (error.response != null) {
    //     if (error.response.status === 401) {
    //         eraseCookie('X-SIPD-PU-TK')
    //         const authKey = getCookie('X-SIPD-PU-TK');
    //         if (authKey !== '' || authKey !== null) {
    //             eraseCookie('X-SIPD-PU-TK')
    //             window.location.href = "/"
    //         }
    //         return
    //     }
    // }

    if (error.response != null && error.response.data != null && error.response.data.msg === 'Token is expired') {
        toast.error('Oops!.. Sesi telah habis, Anda akan diarahkan ke halaman login')
        window.location.href = '/penatausahaan/logout'
        return
    }

    if (error.response && error.response.data) {

        if (error.response.status === 422 && error.response.data != null && error.response.data.fields != null && error.response.data.fields.length > 0) {
            for (let i = 0; i < error.response.data.fields.length; i++) {
                toast.error(error.response.data.fields[i].message);
            }
            return
        }

        const responseData = error.response.data;

        if (responseData.error != null) {

            if (error.response.status >= 400 && error.response.status <= 499) {
                toast(responseData.msg,
                    {
                        icon: '⚠️',
                        style: {
                            borderRadius: '10px',
                            background: '#FFF',
                            color: '#FFAF45',
                        },
                    }
                );
            } else {
                toast.error(responseData.msg);
            }
        } else if (Array.isArray(responseData)) {
            responseData.forEach((item) => {
                if (item.Message) {

                    if (error.response.status >= 400 && error.response.status <= 499) {
                        toast(item.Message,
                            {
                                icon: '⚠️',
                                style: {
                                    borderRadius: '10px',
                                    background: '#FFF',
                                    color: '#FFAF45',
                                },
                            }
                        );
                    } else {
                        toast.error(item.Message);
                    }
                }
            });
        } else if (responseData.message != null) {
            const errorMessage = Array.isArray(responseData.message)
                ? responseData.message.join(", ")
                : responseData.message;

            if (errorMessage === '') {
                if (error.response.status >= 400 && error.response.status <= 499) {
                    toast(`${error.response.status} - ${error.response.statusText}`,
                        {
                            icon: '⚠️',
                            style: {
                                borderRadius: '10px',
                                background: '#FFF',
                                color: '#FFAF45',
                            },
                        }
                    );
                } else {
                    toast.error(`${error.response.status} - ${error.response.statusText}`);
                }
            } else {
                if (error.response.status >= 400 && error.response.status <= 499) {
                    toast(errorMessage,
                        {
                            icon: '⚠️',
                            style: {
                                borderRadius: '10px',
                                background: '#FFF',
                                color: '#FFAF45',
                            },
                        }
                    );
                } else {
                    toast.error(errorMessage);
                }
            }
        } else {
            if (error.response.status >= 400 && error.response.status <= 499) {
                toast(`${error.response.status} - ${error.response.statusText}`,
                    {
                        icon: '⚠️',
                        style: {
                            borderRadius: '10px',
                            background: '#FFF',
                            color: '#FFAF45',
                        },
                    }
                );
            } else {
                toast.error(`${error.response.status} - ${error.response.statusText}`);
            }
        }
    }
}