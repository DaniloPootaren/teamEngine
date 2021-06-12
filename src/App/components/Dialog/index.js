import React from "react";
import ReactDOM from 'react-dom';
import { Flex } from "../../components/styled";
import { ContentContainer, Dialog, DialogOverlay, HeaderContainer } from "./styled"




const DialogComponent = (props) => {
    const {
        header,
        children,
    } = props


    return ReactDOM.createPortal(
        < DialogOverlay >
            <Dialog>
                <Flex direction="column">
                    <HeaderContainer>{header}</HeaderContainer>
                    <ContentContainer >{children}</ContentContainer>
                </Flex>
            </Dialog>
        </DialogOverlay >, document.getElementById('root'));
};

export default DialogComponent;
