import styles from "./Contact.module.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, email) {
    return { name, email };
}

const rows = [
    createData('Allison Hua', 'huaat@uci.edu'),
    createData('Christine Nguyen', 'chrisln4@uci.edu'),
    createData('Christopher Walden', 'waldencj@uci.edu'),
    createData('Yen Phuong Lam', 'lamyp@uci.edu'),
];

export default function Contact() {
    return (
        <>
            <div className={styles.headerSection}>
                <h1>Contact</h1>
            </div>
            <TableContainer component={Paper} className={styles.contactTableContainer}>
                <Table className={styles.contactTable} size="small" aria-label="contact table">
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Name</strong></TableCell>
                            <TableCell><strong>Email</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}