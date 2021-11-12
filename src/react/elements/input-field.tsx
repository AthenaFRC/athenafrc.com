import "./input-field.scss";
import React from "react";

export type InputFieldProps = Readonly<{
    id: string,
    name: string,
    type?: React.HTMLInputTypeAttribute,
    initialValue?: React.InputHTMLAttributes<HTMLInputElement>["value"],
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>
    required: boolean
}>;

export type InputFieldState = Readonly<{
    value: React.InputHTMLAttributes<HTMLInputElement>["value"]
}>;

export class InputField extends React.Component<InputFieldProps, InputFieldState> {

    public constructor(props: InputFieldProps) {

        super(props);

        this.state = {
            value: this.props.initialValue
        };

    }


    public render(): React.ReactNode {

        return (
            <div className={`input-field input-field-${this.props.id}`}>
                <label htmlFor={this.props.id}>{this.props.name}</label>
                <input
                    id={this.props.id}
                    type={this.props.type}
                    name={this.props.id}
                    value={this.state.value}
                    onChange={this.props.onChange}
                    placeholder={this.props.name}
                    required={this.props.required} />
            </div>
        );

    }

}