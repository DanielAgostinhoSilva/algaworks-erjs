import {Component, PropsWithChildren} from "react";

type ButtonProps = PropsWithChildren<{
    onClick?: () => any,
    initializeClicked?: boolean
}>

interface ButtonState {
    alreadyClicked: boolean
}

class Button extends Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps) {
        super(props);

        this.state = {
            alreadyClicked: !!props.initializeClicked
        }
    }

    render() {
        return <button
            onClick={() => {
                this.props.onClick?.call([])
                this.setState({
                    alreadyClicked: true
                })
            }}
            disabled={this.state.alreadyClicked}
        >
            {this.props.children}
        </button>;
    }
}

export default Button