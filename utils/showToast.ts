import toast from "react-hot-toast";

export default function showToast(message: string) {
    toast.error(message, {
        id: Date.now().toString(),
        duration: 3000,
        position: "top-center",
        className: "p-4 rounded-lg",
    });
}
