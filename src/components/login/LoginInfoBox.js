import React from 'react';
import Container from 'react-bootstrap/Container'
import { makeStyles } from '@material-ui/core/styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
    box:{
        border:"2px solid blue",
        height:"50px"
    },
    center:{
        justifySelf:"center"
    }
})

export default function Box(){
    const classes = useStyles()
    return (
        <Container fluid>
            <Row className={["justify-content-center"]}>
                <Col xs={12} >
                    <TextField id="filled-basic" label="your login ID" variant="filled" required />
                </Col>
                <Col xs={12}>
                    <TextField id="filled-basic" label="your password" variant="filled" required type="password" />
                </Col>
                <Col xs={12} >
                    <Button variant="contained" color="Primary">Sign in</Button>
                </Col>
            </Row>
        </Container>
    )
}
