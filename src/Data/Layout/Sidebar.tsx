export const useMenuList = () => {
  const menuList = [
    {
      Items: [
        {
          title: "Quản trị người dùng",
          lanClass: "lan-1",
          children: [
            {
              title: "Người dùng",
              type: "sub",
              lanClass: "lan-3",
              path: "/user/list",
            },
            {
              title: "Phân quyền - Not",
              type: "sub",
              lanClass: "lan-3",
              // path: "/user/list",
            },
          ],
        },
        {
          title: "Danh mục môn thi",
          lanClass: "lan-1",
          path: "/sport/list",
          type: "sub",
        },
        {
          title: "Danh mục đơn vị",
          lanClass: "lan-1",
          path: "/org/list",
          type: "link",
        },
        {
          title: "Nhập vận động viên cho đơn vị",
          lanClass: "lan-1",
          path: "/teammember/list",
          type: "link",
        },
        {
          title: "Quản trị thi lực lượng thường trực",
          lanClass: "lan-1",
          children: [
            {
              path: "/team/list",
              title: "Đăng ký thi",
              type: "link",
              lanClass: "lan-4",
            },
            {
              path: "/tablequalifyings/list",
              title: "Lập lịch vòng bảng",
              type: "link",
              lanClass: "lan-4",
            },
            {
              path: "/lotsdraw/list/",
              title: "Lập lịch bốc thăm",
              type: "link",
              lanClass: "lan-4",
            },
            {
              path: "/reportresult",
              title: "Xuất phiếu điểm",
              type: "link",
              lanClass: "lan-4",
            },
            {
              path: "/resultexport",
              title: "Bảng xếp hạng",
              type: "link",
              lanClass: "lan-4",
            },
            // {
            //   path: "#",
            //   title: "Nhập điểm - Not",
            //   type: "link",
            //   lanClass: "lan-4",
            // },
          ],
        },
      ],
    },
  ];

  return { menuList };
};
