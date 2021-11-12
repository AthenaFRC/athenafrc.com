import "./page.scss";
import React from "react";

export type PageProps = Readonly<{}>;
export type PageState = Readonly<{}>;

export class Page extends React.Component<PageProps, PageState> {

    public render(): React.ReactNode {

        return (
            <main className={"page"}>
                {this.props.children}
            </main>
        );

    }

}