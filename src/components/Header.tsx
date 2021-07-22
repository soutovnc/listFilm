import { FC } from 'react';
import '../styles/header.scss'

interface HeaderProps {
    title: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
    return (
        <header>
            <span className="category">Categoria:<span> {title}</span></span>
        </header>
    );
}