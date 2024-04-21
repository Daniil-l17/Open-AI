import { useMutation } from '@tanstack/react-query';
import { Ishat } from '../../types/shatobj';
import style from './home.module.scss';
import { servicesAI } from '../../services/services';
import { Fragment, useEffect } from 'react';
import { useStore } from '../../store/storeZustand';
import { Footer } from '../../components/Footer/Footer';

export const Home = () => {
    const { message, addMessage, addShat, shat } = useStore(state => state);

    const obj: Ishat = {
        model: 'command-r-plus',
        messages: [{ role: 'user', content: message }],
        temperature: 0.1,
        top_p: 0.95,
        max_tokens: 500,
        use_cache: true,
        stream: false,
    };

    const { mutate, data, isPending } = useMutation({
        mutationFn: (obj: Ishat) => servicesAI.createAsk(obj),
        onSuccess: () => {
            addMessage('');
        },
    });

    useEffect(() => {
        if (data?.data) {
            addShat({ role: 'AI', message: data?.data.choices[0].message.content! });
        }
    }, [data?.data]);

    const addshat = () => {
        window.scroll(0, 1000);
        if (message.length >= 3) {
            mutate(obj);
            addShat({ role: 'user', message: message });
        }
    };

    return (
        <Fragment>
            <div className={style.homepage}>
                <div className="container">
                    <ul className={style.mainul}>
                        {!shat.length ? (
                            <h2 style={{textAlign: 'center',fontSize: '25px',fontWeight: '500'}}>введите вашь запрос!</h2>
                        ) : (
                            shat.map(el => (
                                <li
                                    style={
                                        el.role === 'AI'
                                            ? {
                                                  textAlign: 'right',
                                                  display: 'flex',
                                                  justifyContent: 'end',
                                              }
                                            : { textAlign: 'left' }
                                    }
                                    className={`ele`}
                                >
                                    <div className={style.prods}>
                                        <h2 style={{ fontWeight: '500', fontSize: '18px' }}>
                                            {el.role === 'user'
                                                ? 'Пользователь -'
                                                : 'Open AI -'}
                                        </h2>
                                        <p>{el.message}</p>
                                    </div>
                                </li>
                            ))
                        )}
                        {isPending && <p style={{ textAlign: 'right' }}>loading....</p>}
                    </ul>
                </div>
            </div>
            <Footer isPending={isPending} addshat={addshat} />
        </Fragment>
    );
};
