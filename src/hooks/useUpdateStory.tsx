import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

export const useUpdateStory = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (story: any) => {
            const res = await axios.put(
                `http://localhost:3000/stories/${story.id}`,
                story
            );
            return res.data;
        },

        onSuccess: () => {
            toast.success("Sửa thành công");
            queryClient.invalidateQueries({ queryKey: ["stories"] });
        },
    });
};