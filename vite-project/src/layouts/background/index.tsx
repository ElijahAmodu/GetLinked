import React, { PropsWithChildren } from "react";
import classes from "./index.module.scss"
import classNames from "classnames"

type Props = {
    className?: string;
};

const Background: React.FC<PropsWithChildren<Props>> = ({children, className}) => {
    return(
        <main className={classNames([classes.custom__bg, 'relative', className])}>
            <div>
                {children}
            </div>
        </main>
    )
}

export default Background;