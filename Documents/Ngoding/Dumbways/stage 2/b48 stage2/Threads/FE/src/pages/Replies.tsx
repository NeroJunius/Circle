import { Box } from "@chakra-ui/react";
import DetailThread from "../features/thread/components/DetailThread";
import MyProfile from "../features/thread/components/MyProfile";
import NavStatus from "../features/thread/components/NavSatus";
import SideBar from "../features/thread/components/SideBar";

export function Replies() {
  //   const { id } = useParams();
  //   const data = fake.find((data) => data.id === Number(id));
  //   const { threads } = useFecthThread();

  //   const [data] = useState(fake);
  //   console.log(data);
  return (
    <>
      <SideBar />
      <Box>
        <NavStatus />
        <DetailThread />
      </Box>
      <MyProfile />
    </>
  );
}
