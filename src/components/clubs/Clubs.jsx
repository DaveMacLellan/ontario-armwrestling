import './Clubs.css'
import React, { Component } from 'react'
import { Container, Table, Badge } from 'react-bootstrap'

export default function Clubs() {
    const trainers = [
        {
            "id": "1",
            "name": "Harpreet Rajput / Mohinder Singh",
            "clubName": "",
            "location": "Ajax"
        },
        {
            "id": "2",
            "name": "Tim Bonell",
            "clubName": "",
            "location": "Arnprior"
        },
        {
            "id": "3",
            "name": "Magda Kaczmarek",
            "clubName": "",
            "location": "Barrie / Angus"
        },
        {
            "id": "4",
            "name": "John Janek",
            "clubName": "Iron Arms",
            "location": "Barrie"
        },
        {
            "id": "5",
            "name": "Joe Gould",
            "clubName": "",
            "location": "Bellville"
        },
        {
            "id": "6",
            "name": "Andre Gelineau",
            "clubName": "",
            "location": "Chatham"
        },
        {
            "id": "7",
            "name": "Kris Albers",
            "clubName": "",
            "location": "Cornwall"
        },
        {
            "id": "8",
            "name": "Mark Hoover",
            "clubName": "",
            "location": "Dunnville"
        },
        {
            "id": "9",
            "name": "Buck Nie",
            "clubName": "",
            "location": "Dunnville"
        },
        {
            "id": "10",
            "name": "Jamie Staken",
            "clubName": "",
            "location": "Elora"
        },
        {
            "id": "11",
            "name": "Steve Morneau",
            "clubName": "",
            "location": "Gatinue / Quebec"
        },
        {
            "id": "12",
            "name": "Matt Carriere",
            "clubName": "",
            "location": "Hearst"
        },
        {
            "id": "13",
            "name": "Kevin Carriere",
            "clubName": "",
            "location": "Kapuskasing"
        },
        {
            "id": "14",
            "name": "Jordan Rezka",
            "clubName": "",
            "location": "Keswick/Newmarket"
        },
        {
            "id": "15",
            "name": "Mikel Gould / Chris Doucet ",
            "clubName": "",
            "location": "Kingston"
        },
        {
            "id": "16",
            "name": "Tyler Bolzan",
            "clubName": "",
            "location": "Kitchener"
        },
        {
            "id": "17",
            "name": "Ian Shedden",
            "clubName": "Immortal Arms",
            "location": "Listowel"
        },
        {
            "id": "18",
            "name": "Dwayne Hegelheimer",
            "clubName": "",
            "location": "London"
        },
        {
            "id": "19",
            "name": "Shaun Draper",
            "clubName": "",
            "location": "Marathon area / north shore superior"
        },
        {
            "id": "20",
            "name": "James William Bourgoin",
            "clubName": "",
            "location": "Minden"
        },
        {
            "id": "21",
            "name": "Shawn Emmorey",
            "clubName": "",
            "location": "Oshawa/Ajax"
        },
        {
            "id": "22",
            "name": "Dan Labrie / Devon Larratt",
            "clubName": "",
            "location": "Ottawa"
        },
        {
            "id": "23",
            "name": "James Whitehall",
            "clubName": "",
            "location": "Parry Sound"
        },
        {
            "id": "24",
            "name": "Evan Bourgoin",
            "clubName": "",
            "location": "Pembroke"
        },
        {
            "id": "25",
            "name": "Ryan Charles",
            "clubName": "",
            "location": "Peterborough"
        },
        {
            "id": "26",
            "name": "John Mcalpine",
            "clubName": "",
            "location": "Picton"
        },
        {
            "id": "27",
            "name": "Adam Vandall",
            "clubName": "",
            "location": "Port Dover"
        },
        {
            "id": "28",
            "name": "Doug Behrens",
            "clubName": "",
            "location": "Sault Ste Marie"
        },
        {
            "id": "29",
            "name": "Douglas Hogan",
            "clubName": "",
            "location": "Spencerville"
        },
        {
            "id": "30",
            "name": "Alex Morales",
            "clubName": "",
            "location": "St.Catharines"
        },
        {
            "id": "31",
            "name": "Pierre Kennedy",
            "clubName": "",
            "location": "Sturgeon Falls"
        },
        {
            "id": "32",
            "name": "Brad Wade / Brian Desormeaux",
            "clubName": "",
            "location": "Sudbury area"
        },
        {
            "id": "33",
            "name": "Chris Nicholas",
            "clubName": "",
            "location": "Thunderbay"
        },
        {
            "id": "34",
            "name": "Jason Costantini / Alex Keary",
            "clubName": "Table Monkeys",
            "location": "Toronto"
        },
        {
            "id": "35",
            "name": "Jose Plante",
            "clubName": "",
            "location": "Wawa"
        }
    ];
    
    return (        
        <Container className='clubBack'>
            <div>
                <h1>Clubs</h1>
            </div>
            <Table variant="dark" responsive>
                <thead>
                    <tr>
                        <th>Club Name</th>
                        <th>Location</th>
                        <th>Club Lead</th>
                    </tr>
                </thead>
                <tbody>
                    {trainers.map((trainers, index)=> (
                        <tr data-index={index}>                        
                        <td>{trainers.clubName}</td>
                        <td>{trainers.location}</td>
                        <td>{trainers.name}</td>
                    </tr>
                    ))}                    
                </tbody>

            </Table>
        </Container>
    )
}
