import CautionIcon from "./svg/cautionIcon"
import LightningChargeIcon from "./svg/lightningChargeIcon"
import SunIcon from "./svg/sunIcon"

const ChatBoxSection = [
	{
		icon: <SunIcon />,
		title: "Ví dụ",
		subTitle: [
			`"Giải thích về tính toán lượng tử một cách đơn giản" →`,
			`"Bạn có ý tưởng sáng tạo nào cho sinh nhật 10 tuổi không?" →`,
			`"Làm cách nào để thực hiện yêu cầu HTTP trong Javascript?" →`,
		],
		hover: true,
	},
	{
		icon: <LightningChargeIcon />,
		title: "Khả năng",
		subTitle: [
			`Ghi nhớ những gì người dùng đã nói trước đó trong cuộc trò chuyện`,
			`Cho phép người dùng cung cấp các chỉnh sửa tiếp theo`,
			`Được đào tạo để từ chối các yêu cầu không phù hợp`,
		],
		hover: false,
	},
	{
		icon: <CautionIcon />,
		title: "Hạn chế",
		subTitle: [
			`Đôi khi có thể tạo ra thông tin không chính xác`,
			`Đôi khi có thể tạo ra các hướng dẫn có hại hoặc nội dung sai lệch`,
			`Kiến thức hạn chế về thế giới và các sự kiện sau năm 2021`,
		],
		hover: false,
	},
]

export default ChatBoxSection
