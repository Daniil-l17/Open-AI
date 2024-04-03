import style from './header.module.scss';

export const Header = () => {
    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.headerBtn}>
                    <h1>Open AI</h1>
                    <p>
                        чат-бот с генеративным искусственным интеллектом, разработанный
                        компанией OpenAI и способный работать в диалоговом режиме,
                        поддерживающий запросы на естественных языках.
                    </p>
                </div>
            </div>
        </header>
    );
};
