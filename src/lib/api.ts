const BASE_URL = "http://localhost:3000";

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
    const token = localStorage.getItem("authToken");

    const headers = {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        ...options.headers,
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers,
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'API request failed');
    }

    return response.json();
}