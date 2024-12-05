'use client';

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function CustomChart({ data, labels }) {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels, // Keep all dates for internal data representation
                datasets: [
                    {
                        label: 'Memories Managed',
                        data: data,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        tension: 0.3,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Memories Managed in 2024',
                    },
                },
                scales: {
                    x: {
                        display: false, // Hides the entire x-axis, including labels and grid lines
                    },
                    y: {
                        display: false,
                        beginAtZero: true,
                        title: {
                            display: false,
                            text: 'Data Points',
                        },
                    },
                },
            },
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [data, labels]);

    return <canvas ref={chartRef}></canvas>;
}