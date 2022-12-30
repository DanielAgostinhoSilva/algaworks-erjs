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

        console.log("constructor")

        this.state = {
            alreadyClicked: !!props.initializeClicked
        }
    }

    render() {
        console.log("render")
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

    componentDidMount() {
        console.log("componentDidMount")
    }
}

export default Button