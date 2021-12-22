import './Clubs.css'
import React, { Component } from 'react'
import { Container, Table, Badge } from 'react-bootstrap'

export default function Clubs() {
    const trainers = [
        {
            "id": "1",
            "name": "Harpreet Rajput / Mohinder Singh",
            "location": "Ajax"
        },
        {
            "id": "2",
            "name": "Tim Bonell",
            "location": "Arnprior"
        },
        {
            "id": "3",
            "name": "Magda Kaczmarek",
            "location": "Barrie / Angus"
        },
        {
            "id": "4",
            "name": "John Janek",
            "location": "Barrie"
        },
        {
            "id": "5",
            "name": "Joe Gould",
            "location": "Bellville"
        },
        {
            "id": "6",
            "name": "Andre Gelineau",
            "location": "Chatham"
        },
        {
            "id": "7",
            "name": "Kris Albers",
            "location": "Cornwall"
        },
        {
            "id": "8",
            "name": "Mark Hoover",
            "location": "Dunnville"
        },
        {
            "id": "9",
            "name": "Buck Nie",
            "location": "Dunnville"
        },
        {
            "id": "10",
            "name": "Jamie Staken",
            "location": "Elora"
        },
        {
            "id": "11",
            "name": "Steve Morneau",
            "location": "Gatinue / Quebec"
        },
        {
            "id": "12",
            "name": "Matt Carriere",
            "location": "Hearst"
        },
        {
            "id": "13",
            "name": "Kevin Carriere",
            "location": "Kapuskasing"
        },
        {
            "id": "14",
            "name": "Jordan Rezka",
            "location": "Keswick/Newmarket"
        },
        {
            "id": "15",
            "name": "Mikel Gould / Chris Doucet ",
            "location": "Kingston"
        },
        {
            "id": "16",
            "name": "Tyler Bolzan",
            "location": "Kitchener"
        },
        {
            "id": "17",
            "name": "Ian Shedden",
            "location": "Listowel"
        },
        {
            "id": "18",
            "name": "Dwayne Hegelheimer",
            "location": "London"
        },
        {
            "id": "19",
            "name": "Shaun Draper",
            "location": "Marathon area / north shore superior"
        },
        {
            "id": "20",
            "name": "James William Bourgoin",
            "location": "Minden"
        },
        {
            "id": "21",
            "name": "Shawn Emmorey",
            "location": "Oshawa/Ajax"
        },
        {
            "id": "22",
            "name": "Dan Labrie / Devon Larratt",
            "location": "Ottawa"
        },
        {
            "id": "23",
            "name": "James Whitehall",
            "location": "Parry Sound"
        },
        {
            "id": "24",
            "name": "Evan Bourgoin",
            "location": "Pembroke"
        },
        {
            "id": "25",
            "name": "Ryan Charles",
            "location": "Peterborough"
        },
        {
            "id": "26",
            "name": "John Mcalpine",
            "location": "Picton"
        },
        {
            "id": "27",
            "name": "Adam Vandall",
            "location": "Port Dover"
        },
        {
            "id": "28",
            "name": "Doug Behrens",
            "location": "Sault Ste Marie"
        },
        {
            "id": "29",
            "name": "Douglas Hogan",
            "location": "Spencerville"
        },
        {
            "id": "30",
            "name": "Alex Morales",
            "location": "St.Catharines"
        },
        {
            "id": "31",
            "name": "Pierre Kennedy",
            "location": "Sturgeon Falls"
        },
        {
            "id": "32",
            "name": "Brad Wade / Brian Desormeaux",
            "location": "Sudbury area"
        },
        {
            "id": "33",
            "name": "Chris Nicholas",
            "location": "Thunderbay"
        },
        {
            "id": "34",
            "name": "Jason Costantini",
            "location": "Toronto"
        },
        {
            "id": "35",
            "name": "Jose Plante",
            "location": "Wawa"
        }
    ];
    
    return (        
        <Container>
            <div>
                <h1>Clubs</h1>
            </div>
            <Table variant="dark" responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {trainers.map((trainers, index)=> (
                        <tr data-index={index}>
                        <td>{trainers.name}</td>
                        <td>{trainers.location}</td>
                    </tr>
                    ))}                    
                </tbody>

            </Table>
        </Container>
    )
}
