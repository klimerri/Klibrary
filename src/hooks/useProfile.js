import { useAuthContext } from "../context/AuthContext"

const getProfile = () => {
    const {session} = useAuthContext()
    const {data: userRole} = useUserRole(session?.user?.id)
    const {data: user_role} = userRoleById(userRole?.)
} 