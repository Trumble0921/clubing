import React, { Component } from 'react';
import { Image } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail } from 'native-base';

class CardList extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('./images/main.png')} />
                        <Body>
                            <Text>{this.props.user}</Text>
                            <Text note>{this.props.address}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={require('./images/main.png')} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                            <Icon active name={"thumbs-up"} />
                            <Text>12 Likes</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text>4 Comments</Text>
                        </Button>
                    </Body>
                    <Right>
                        <Text>11h ago</Text>
                    </Right>
                </CardItem>
            </Card>
        )
    }
}


export default class AnatomyExample extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name={'arrow-back'}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name={'menu'} />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Text>
                        당신 주변에 이러한 모임들이 있습니다.
                    </Text>
                    <CardList user={'사용자1'} address={'인천시 부평구'}/>
                    <CardList user={'사용자2'} address={'서울시 강남구'}/>
                    <CardList user={'사용자3'} address={'인천시 연수구'}/>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button vertical>
                            <Icon name={"apps"} />
                            <Text>Apps</Text>
                        </Button>
                        <Button vertical>
                            <Icon name={"camera"} />
                            <Text>Camera</Text>
                        </Button>
                        <Button vertical active>
                            <Icon active name="navigate" />
                            <Text>Navigate</Text>
                        </Button>
                        <Button vertical>
                            <Icon name={"person"} />
                            <Text>Contact</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}