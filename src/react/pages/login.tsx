
import React from "react";
import { Page } from "../elements/page";
import { InputField } from "../elements/input-field";

export type LoginProps = Readonly<{}>;
export type LoginState = Readonly<{}>;

export class Login extends React.Component<LoginProps, LoginState> {
    
    public constructor(props: LoginProps) {
        
        super(props);
        
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
    }
    
    
    protected async onInputChange(event: any): Promise<void> {

        this.setState({
            [event.target.name]: event.target.value
        } as LoginState);

    }

    protected async onSubmit(event: React.FormEvent<HTMLDivElement>): Promise<void> {

        event.preventDefault();

        console.log(this.state);

    }

    public render(): React.ReactNode {

        return (
            <Page>
                <div className={"login-box"} onSubmit={this.onSubmit}>
                    <form id={"login-form"} action={""}>
                        <InputField
                            id={"username"}
                            name={"Username"}
                            type={"text"}
                            onChange={this.onInputChange}
                            required />
                        <InputField
                            id={"password"}
                            name={"Password"}
                            type={"password"}
                            onChange={this.onInputChange}
                            required />
                        <input
                            type={"submit"}
                            value={"Login"}/>
                    </form>
                </div>
            </Page>
        );

    }

}