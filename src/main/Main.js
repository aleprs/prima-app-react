import './Main.css';
import Button from '../button/Button.js'

export default function Main(){
    return(
        <main>
            Io sono il *Main*. Qui inserisco il contenuto
        </main>
    );
}

export function BottoneMain(){
    return(
        <Button>Bottone Main</Button>
    )
};

export function BottoneLoad(){
    return (
        <BottoneLoad>BottoneLoad</BottoneLoad>
    )
};