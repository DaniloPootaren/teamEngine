import React from "react";
import Container from "./styled/Container";

const InfiniteScroller = (props) => {
    const { children, callback } = props
    const offset = 0

    const handleScroll = (e) => {
        const element = e.target;
        if (element.scrollHeight - element.scrollTop <= element.clientHeight + offset) {
            callback();
        }
    }

    return (
        <Container onScroll={e => handleScroll(e)}>
            {children}
        </Container>
    )
}

export default InfiniteScroller;
