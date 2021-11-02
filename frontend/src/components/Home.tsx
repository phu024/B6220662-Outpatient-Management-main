import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(2),
    },
    table: {
      minWidth: 650,
    },
    tableSpace: {
      marginTop: 20,
    },
  })
);

function Home() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container} maxWidth="md">
        <h1 style={{ textAlign: "center" }}>ระบบย่อย: ระบบลงทะเบียนข้อมูลผู้ป่วย</h1>
        <h4>Requirements</h4>
        <p>
        ระบบจัดการคนไข้นอกเป็นระบบที่มีความสำคัญในการจัดการ การให้บริการอย่างเป็นระบบเรียบร้อยมีความต่อเนื่องของข้อมูล
        สำหรับในส่วนนี้เป็นระบบการลงทะเบียนข้อมูลผู้ป่วย โดยการขอข้อมูลจากผู้ป่วยแล้วบันทึกลงในฐานข้อมูล เพื่อให้มีรายชื่อหรือข้อมูลผู้ป่วยที่เข้ามารักษา 
        พร้อมกับรายละเอียดที่สำคัญ ให้เป็นไปด้วยความถูกต้อง และรวดเร็ว ซึ่งเจ้าหน้าที่เวชระเบียน จะต้องทำการlogin ก่อนการลงทะเบียนข้อมูลผู้ป่วย 
        ในการลงทะเบียนจะประกอบไปด้วยหมายเลขประจำตัวผู้ป่วย ข้อมูลส่วนบุคคล ประวัติการแพ้ยา โรคประจำตัว เพศ วันเดือนปีเกิด 
        ข้อมูลเหล่านี้ล้วนมีความสำคัญต่อบุคลลากรทางการแพทย์ที่จะนำไปใช้ในการประกอบการวินิจฉัย และเจ้าหน้าที่หรือบุคลลากรในส่วนอื่น ๆ 
        สามารถเรียกดูหรือนำข้อมูลไปใช้ได้หลังจากที่ลงทะเบียนเรียบร้อยแล้ว
        </p>
      </Container>
    </div>
  );
}
export default Home;
