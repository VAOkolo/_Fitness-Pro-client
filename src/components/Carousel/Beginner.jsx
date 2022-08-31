import Carousel from 'react-bootstrap/Carousel';
import "./carousel.css"
import Table from 'react-bootstrap/Table';


export default function Beginner() {
    return (
        <Carousel interval={null} variant="dark" indicators={false}>
            <Carousel.Item className="carousel-item">
                <h1>Monday</h1>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>Exercise</th>
                            <th>Sets</th>
                            <th>Reps</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Incline Dumbell press</td>
                            <td>3</td>
                            <td>6-10</td>
                        </tr>
                        <tr>
                            <td>Chest Supported Row</td>
                            <td>3</td>
                            <td>8-10</td>
                        </tr>
                        <tr>
                            <td >Overhead Press</td>
                            <td>3</td>
                            <td>6-10</td>
                        </tr>
                        <tr>
                            <td>Lat Pulldowns</td>
                            <td>3</td>
                            <td>8-10</td>
                        </tr>
                    </tbody>
                </Table>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
                    alt="..."
                />

                <Carousel.Caption>
                    <h3>Tuesday</h3>
                    <ul>
                        <li>5x pushups</li>
                        <li>Tuesday: Lower body workout </li>
                        <li>Wednesday:</li>
                        <li>Thursday: Upper body workout</li>
                        <li>Friday: Lower body workout</li>
                        <li>Saturday:</li>
                        <li>Sunday</li>
                    </ul>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
