import { Button, TextField } from '@mui/material';
import style from './footer.module.scss';
import SendIcon from '@mui/icons-material/Send';
import { useStore } from '../../store/storeZustand';
export const Footer = ({addshat,isPending}:{addshat:() => void,isPending: boolean}) => {
  const {addMessage,message} = useStore((state) => state)



    return (
        <div className={style.footer}>
            <TextField
                className={style.textfooter}
                id="outlined-textarea"
                label="Задать вопрос"
                placeholder="Ваш вопрос"
                value={message}
                onChange={e => addMessage(e.target.value)}
                multiline
            />
            <Button disabled={isPending} onClick={addshat} variant="outlined" className={style.btnfooter} endIcon={<SendIcon />}>
                Send
            </Button>
        </div>
    );
};
