import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Container, Title, LogoImage } from './ComponentsLib'

const Header = () => {
    return (
        <Container row>
            <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
            />
            <Title>TODO LIST</Title>
        </Container>

    )
}

export default Header

const styles = StyleSheet.create({
    logo: {
        height: 45,
        width: 45
    }
})