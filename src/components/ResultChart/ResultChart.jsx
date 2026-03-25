import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  {
    "studentId": "S001",
    "studentName": "Alice Johnson",
    "physics": 85,
    "chemistry": 78,
    "math": 92
  },
  {
    "studentId": "S002",
    "studentName": "Bob Smith",
    "physics": 74,
    "chemistry": 82,
    "math": 88
  },
  {
    "studentId": "S003",
    "studentName": "Charlie Davis",
    "physics": 91,
    "chemistry": 89,
    "math": 95
  },
  {
    "studentId": "S004",
    "studentName": "Diana Evans",
    "physics": 68,
    "chemistry": 72,
    "math": 80
  },
  {
    "studentId": "S005",
    "studentName": "Ethan Brown",
    "physics": 77,
    "chemistry": 85,
    "math": 83
  },
  {
    "studentId": "S006",
    "studentName": "Fiona Clark",
    "physics": 90,
    "chemistry": 88,
    "math": 94
  },
  {
    "studentId": "S007",
    "studentName": "George Miller",
    "physics": 82,
    "chemistry": 79,
    "math": 86
  },
  {
    "studentId": "S008",
    "studentName": "Hannah Wilson",
    "physics": 76,
    "chemistry": 81,
    "math": 79
  },
  {
    "studentId": "S009",
    "studentName": "Ian Thomas",
    "physics": 89,
    "chemistry": 90,
    "math": 91
  },
  {
    "studentId": "S010",
    "studentName": "Julia Martinez",
    "physics": 73,
    "chemistry": 77,
    "math": 84
  }
]

const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line type="monotone" dataKey="chemistry" stroke="#8884d8"></Line>
                <Line type="monotone" dataKey="math" stroke="#ff7300"></Line>
                <Line type="monotone" dataKey="physics" stroke="#82ca9d"></Line>
                
            </LineChart>
        </div>
    );
};

export default ResultChart;