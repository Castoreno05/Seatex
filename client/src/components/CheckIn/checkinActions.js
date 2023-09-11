const currentDate = new Date();

export const formattedDate =
	String(currentDate.getMonth() + 1).padStart(2, "0") +
	"/" +
	String(currentDate.getDate()).padStart(2, "0") +
	"/" +
	currentDate.getFullYear() +
	" " +
	String(currentDate.getHours()).padStart(2, "0") +
	":" +
	String(currentDate.getMinutes()).padStart(2, "0") +
	":" +
	String(currentDate.getSeconds()).padStart(2, "0");
