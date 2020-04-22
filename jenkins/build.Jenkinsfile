pipeline {
  agent any

  stages {
    stage('Build') {
      environment {
        DOCKER_REGISTRY = credentials('docker-registry-central-sv')
        VAULT = credentials('vault-central-sv-reader')
      }
      steps {
        sh """
        ./jenkins/build
        """
        archiveArtifacts artifacts: 'docker-image.txt'
      }
    }
  }
}
