import { Box, LinearProgress, linearProgressClasses, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

function createData(week, status, mark, comments) {
  return { week, status, mark, comments };
}

const rows = [
  createData('Week0', 'Graded', 6.0, 24),
  createData('Week1', 'Not submitted', 9.0, 37),
  createData('Week2', 'Not opened', 16.0, 24),
];

const GradeBook = () => {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    // Calculate the progress based on the number of graded weeks
    const gradedWeeks = rows.filter(row => row.status === 'Graded').length
    const totalWeeks = rows.length
    const progress = (gradedWeeks / totalWeeks) * 100
    setProgressValue(progress)
  }, [rows])

  return (
    <div>
      <Box sx={{ width: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>

          <Box gridColumn="span 12">
            <Typography variant='h6'>
              ProjectName
            </Typography>
          </Box>

          <Box gridColumn="span 12">
            <Typography>
              Gradebook for StudentName
            </Typography>
            <hr />
          </Box>

          <Box gridColumn="span 12">
            <Typography align='left'>
              Current Progress
            </Typography>
            <br />
            <BorderLinearProgress variant="determinate" value={progressValue} />
          </Box>

          <Box gridColumn="span 12">
            <br />
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <caption>A basic table example with a caption</caption>
                <TableHead>
                  <TableRow>
                    <TableCell>Week</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">Mark</TableCell>
                    <TableCell align="center">Comments</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.week}>
                      <TableCell component="th" scope="row">
                        {row.week}
                      </TableCell>
                      <TableCell align="center">{row.status}</TableCell>
                      <TableCell align="center">{row.mark}</TableCell>
                      <TableCell align="center">{row.comments}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default GradeBook
