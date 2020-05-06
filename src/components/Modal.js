import React from 'react';
import { Button, Container, Input } from './ComponentsLib'

const Modal = () => {
    return (
        <Container modal>
            <Input defaultValue="Type task here..." type="text" />
            <Container>
                <Button>Cancel</Button>
                <Button primary>Save</Button>
            </Container>
        </Container>
    )
}

export default Modal