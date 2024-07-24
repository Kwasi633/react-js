type HeadingProp = {
    children: string
}

export const Heading = (props: HeadingProp) => {
    return <h2>{props.children}</h2>
}