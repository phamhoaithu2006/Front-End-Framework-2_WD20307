import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useCRUDStory = () => {
    const queryClient = useQueryClient();

    const { data: list = [], isLoading } = useQuery({
        queryKey: ['stories'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/stories');
            return res.data;
        },
    });

    const add = useMutation({
        mutationFn: async (data) =>
            (await axios.post('http://localhost:3000/stories', data)).data,
        onSuccess: () => queryClient.invalidateQueries(['stories']),
    });

    const remove = useMutation({
        mutationFn: async (id) =>
            await axios.delete(`http://localhost:3000/stories/${id}`),
        onSuccess: () => queryClient.invalidateQueries(['stories']),
    });

    const update = useMutation({
        mutationFn: async ({ id, data }) =>
            (await axios.put(`http://localhost:3000/stories/${id}`, data)).data,
        onSuccess: () => queryClient.invalidateQueries(['stories']),
    });

    return {
        list,
        isLoading,
        add: add.mutate,
        remove: remove.mutate,
        update: update.mutate,
    };
};