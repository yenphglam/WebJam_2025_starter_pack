import styles from "./Contact.module.css";

function createData(name, email) {
    return { name, email };
}

const rows = [
    createData('Allison Hua', 'huaat@uci.edu'),
    createData('Christine Nguyen', 'chrisln4@uci.edu'),
    createData('Christopher Walden', 'checkdoesgames@gmail.com'),
    createData('Yen Phuong Lam', 'lamyp@uci.edu'),
];

export default function Contact() {
    return (
        <>
            <div className={styles.headerSection}>
                <h1>Contact</h1>
            </div>
            <TableContainer className={styles.contactTableContainer}>
                <Table className={styles.contactTable} size="small" aria-label="a dense table">
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