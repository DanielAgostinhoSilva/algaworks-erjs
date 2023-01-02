import {forwardRef, PropsWithChildren, useImperativeHandle, useRef} from "react";

type ScrollableBoxProps = PropsWithChildren<{
    width: number,
    height: number
}>

export type ScrollableRef = {
    scrollToBotton: () => void
}

export default forwardRef<ScrollableRef, ScrollableBoxProps>((props, ref) => {
    const currentRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(
        ref,
        () => ({
            scrollToBotton() {
                if(currentRef.current) {
                    currentRef.current.scrollTop = currentRef.current?.scrollHeight
                }
            }
        }),
        []
    )

    return <div
        ref={currentRef}
        style={{
            height: props.height,
            width: props.width,
            overflow: 'auto',
            margin: '24px auto'
        }}
    >
        {props.children}
    </div>
})