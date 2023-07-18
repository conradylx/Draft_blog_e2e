FROM python:3.11-slim-buster

WORKDIR /app

COPY . .

COPY poetry.lock pyproject.toml ./

RUN pip install --no-cache-dir --upgrade pip setuptools \
    && pip install poetry \
    && chmod +x /app/docker_entrypoints/run_backend.sh \
    && poetry config virtualenvs.create false \
    && poetry install --no-interaction --no-ansi \
    && poetry lock

ENTRYPOINT ["/app/docker_entrypoints/run_backend.sh"]
