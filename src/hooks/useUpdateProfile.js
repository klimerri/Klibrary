import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "firebase/auth";
import { update } from "firebase/database";
import { auth } from "../api/firebase";

export const useUpdateProfile = () => {
    const client = useQueryClient

    return useMutation({
        mutationFn: data => updateProfile(auth, data),
        onSuccess: () => client.invalidateQueries()
    })
}