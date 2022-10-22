import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NewsCard = ({ newsCard }) => {
    const { author, image_url, rating, details, title, total_view, _id } = newsCard;
    return (
        <Card className="text-center mb-5">
            <Card.Header className="d-flex justify-content-between align-items-center">
                <div className='d-flex align-items-center'>
                    <Image
                        src={author?.img}
                        roundedCircle
                        style={{ height: "50px", marginRight: "10px" }}
                    >
                    </Image>
                    <div>
                        <p className='mb-0'>{author?.name}</p>
                        <p className='mb-0'>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>{
                    details.length > 250 ?
                        <span>{details.slice(0, 250) + "..."} <Link to={`/news/${_id}`}>Read More</Link></span> :
                        <span>{details}</span>
                }</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <div>
                    <FaStar className='me-2 text-warning'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;